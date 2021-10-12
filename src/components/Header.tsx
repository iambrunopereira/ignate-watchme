import { useEffect, useState } from "react";
import { api } from "../services/api";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}
interface Props {
  selectedGenreId: number;
}
export function Header({ selectedGenreId }: Props) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
