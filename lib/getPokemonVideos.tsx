import ALL_POKEMON from "@/public/data/data.json";

export default async function getPokemonVideos(eng_name: string) {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const maxResults: number = 20;
    const query = `${
        ALL_POKEMON[
            ALL_POKEMON.findIndex((pokemon) => pokemon["eng_name"] === eng_name)
        ].name
    } ポケモン`;

    const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${query}&part=snippet&maxResults=${maxResults}`
    );
    return res.json();
}
