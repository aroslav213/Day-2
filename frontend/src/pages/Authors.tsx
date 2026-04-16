import { useEffect, useState } from "react";
import axios from "axios";

export default function Authors() {
    const [authors, setAuthors] = useState<any[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3000/authors")
            .then(res => {
                console.log("authors:", res.data);
                setAuthors(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Автори</h2>

            {authors.length === 0 && <p>Немає дани</p>}

            <ul>
                {authors.map(a => (
                    <li key={a.id}>{a.name}</li>
                ))}
            </ul>
        </div>
    );
}