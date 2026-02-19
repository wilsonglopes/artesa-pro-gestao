// menu.js
function carregarMenu(paginaAtiva) {
    const sidebar = document.createElement('aside');
    sidebar.className = "w-64 bg-white shadow-md flex-shrink-0 hidden md:block border-r border-gray-100";
    
    // Define as classes para destacar o link ativo
    const linkClasse = "flex items-center py-3 px-6 text-gray-600 hover:bg-gray-100 transition";
    const linkAtivoClasse = "flex items-center py-3 px-6 bg-rose-50 text-rose-600 border-r-4 border-rose-600 font-semibold";

    sidebar.innerHTML = `
        <div class="p-6">
            <h2 class="text-xl font-bold" style="color: #FF1493;">ArtesãPro</h2>
        </div>
        <nav class="mt-4">
            <a href="index.html" class="${paginaAtiva === 'inventario' ? linkAtivoClasse : linkClasse}">
                🧵 Inventário
            </a>
            <a href="calculadora.html" class="${paginaAtiva === 'calculadora' ? linkAtivoClasse : linkClasse}">
                🧮 Calculadora PRO
            </a>
            <a href="config.html" class="${paginaAtiva === 'config' ? linkAtivoClasse : linkClasse}">
                ⚙️ Configurações
            </a>
            <div class="border-t border-gray-100 mt-4 pt-4">
                <button id="btn-logout" class="flex items-center py-3 px-6 text-red-400 hover:text-red-600 transition w-full text-left">
                    🚪 Sair do App
                </button>
            </div>
        </nav>
    `;

    // Insere o menu no início do container principal (flex)
    const layoutContainer = document.querySelector('.flex.min-h-screen');
    layoutContainer.prepend(sidebar);

    // Adiciona a lógica de logout
    document.getElementById('btn-logout').onclick = async () => {
        const { error } = await client.auth.signOut();
        if (!error) window.location.href = 'login.html';
    };
}
