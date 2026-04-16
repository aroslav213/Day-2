import { useEffect, useState } from "react";
import axios from "axios";

export default function Books() {
    const [books, setBooks] = useState<any[]>([]);
    const [authors, setAuthors] = useState<any[]>([]);

    const [title, setTitle] = useState("");
    const [authorId, setAuthorId] = useState(1);

    const [search, setSearch] = useState("");
    const [editId, setEditId] = useState<number | null>(null);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const booksRes = await axios.get("http://localhost:3000/books");
        const authorsRes = await axios.get("http://localhost:3000/authors");
        setBooks(booksRes.data);
        setAuthors(authorsRes.data);
    };

    const getAuthor = (id: number) => {
        const a = authors.find(a => a.id === id);
        return a ? a.name : "Невідомо";
    };

    const addBook = async () => {
        if (!title) return;

        await axios.post("http://localhost:3000/books", {
            title,
            authorId
        });

        setTitle("");
        loadData();
    };

    const deleteBook = async (id: number) => {
        await axios.delete(`http://localhost:3000/books/${id}`);
        loadData();
    };

    const startEdit = (book: any) => {
        setEditId(book.id);
        setTitle(book.title);
        setAuthorId(book.authorId);
    };

    const saveEdit = async () => {
        if (editId === null) return;

        await axios.patch(`http://localhost:3000/books/${editId}`, {
            title,
            authorId
        });

        setEditId(null);
        setTitle("");
        loadData();
    };

    const filteredBooks = books.filter(b =>
        b.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>Книги</h2>

            <input
                placeholder="Пошук"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <h3>{editId ? "Редагування" : "Додати"}</h3>

            <input
                placeholder="Назва"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <select
                value={authorId}
                onChange={(e) => setAuthorId(Number(e.target.value))}
            >
                {authors.map(a => (
                    <option key={a.id} value={a.id}>{a.name}</option>
                ))}
            </select>

            <button onClick={editId ? saveEdit : addBook}>
                {editId ? "Зберегти" : "Додати"}
            </button>

            <ul>
                {filteredBooks.map(b => (
                    <li key={b.id}>
                        <b>{b.title}</b> — {getAuthor(b.authorId)}
                        <button onClick={() => startEdit(b)}>✏️</button>
                        <button onClick={() => deleteBook(b.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}