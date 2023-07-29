import { useState, useEffect } from "react";

export function UseEffectSample() {
  const [list, setList] = useState<string[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/vitorlinsbinski/repos")
      .then((response) => response.json())
      .then((data) => setList(data.map((item: any) => item.full_name)));
  }, []);

  const filteredList = list.filter((item) => item.includes(filter));

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />

      <ul>
        {list.map((item) => (
          <li>{item} </li>
        ))}
      </ul>

      <br></br>

      <ul>
        {filteredList.map((item) => (
          <li>{item} </li>
        ))}
      </ul>
    </div>
  );
}
