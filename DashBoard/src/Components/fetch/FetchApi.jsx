export const FetchApi = async () => {
    try {
        let response = await fetch("https://catfact.ninja/fact");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
};