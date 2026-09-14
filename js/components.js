async function loadComponent(id, file) {
    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        element.innerHTML = await response.text();

    } catch (error) {
        console.error(error);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "components/header.html");
    loadComponent("footer", "components/footer.html");
});