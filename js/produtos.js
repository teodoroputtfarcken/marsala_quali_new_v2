/* ============================================
   MARSALA V2 — PRODUTOS
   Catálogo · Filtros · Paginação
   ============================================ */

(function () {
    'use strict';

    /* ---------- Categorias ---------- */
    const CATEGORIAS = {
        'linha-institucional': { rotulo: 'Institucional',   cor: 'vermelho' },
        'massa-recheada':      { rotulo: 'Recheada',        cor: 'azul'     },
        'massa-fresca':        { rotulo: 'Fresca',          cor: 'vermelho' },
        'linha-seca':          { rotulo: 'Linha Seca',      cor: 'azul'     },
        'pao-alho':            { rotulo: 'Pão de Alho',     cor: 'vermelho' }
    };

    /* ---------- Catálogo (41 produtos) ---------- */
    const PRODUTOS = [
        // ----- Linha Institucional (9) -----
        { nome: 'Ravioli de Frango',        cat: 'linha-institucional', cod: 'RFI', peso: '1',   un: 'kg', img: 'li-ravioli-frango-1kg' },
        { nome: 'Nhoque de Batata',         cat: 'linha-institucional', cod: 'NBI', peso: '1',   un: 'kg', img: 'li-nhoque-batata-1kg' },
        { nome: 'Capeleti de Frango',       cat: 'linha-institucional', cod: 'CFI', peso: '1',   un: 'kg', img: 'li-capeleti-frango-1kg' },
        { nome: 'Massa em Rolo',            cat: 'linha-institucional', cod: 'MRI', peso: '2',   un: 'kg', img: 'li-massa-rolo-2kg' },
        { nome: 'Massa em Rolo',            cat: 'linha-institucional', cod: 'MRI', peso: '1',   un: 'kg', img: 'li-massa-rolo-1kg' },
        { nome: 'Massa Fresca Talharim',    cat: 'linha-institucional', cod: 'TAI', peso: '500', un: 'g',  img: 'li-talharim-500g' },
        { nome: 'Massa para Lasanha',       cat: 'linha-institucional', cod: 'LAI', peso: '1',   un: 'kg', img: 'li-lasanha-1kg' },
        { nome: 'Massa para Pastel',        cat: 'linha-institucional', cod: 'PAI', peso: '1',   un: 'kg', img: 'li-pastel-1kg-a' },
        { nome: 'Massa para Pastel',        cat: 'linha-institucional', cod: 'PBI', peso: '1',   un: 'kg', img: 'li-pastel-1kg-b' },

        // ----- Massa Recheada (6) -----
        { nome: 'Nhoque de Batata',         cat: 'massa-recheada', cod: 'NBR', peso: '500', un: 'g', img: 'mr-nhoque-batata-500g' },
        { nome: 'Ravioli de 4 Queijos',     cat: 'massa-recheada', cod: 'R4Q', peso: '250', un: 'g', img: 'mr-ravioli-4queijos-250g' },
        { nome: 'Ravioli de Frango',        cat: 'massa-recheada', cod: 'RFR', peso: '250', un: 'g', img: 'mr-ravioli-frango-250g' },
        { nome: 'Capeleti de Carne',        cat: 'massa-recheada', cod: 'CCR', peso: '250', un: 'g', img: 'mr-capeleti-carne-250g' },
        { nome: 'Capeleti de Frango',       cat: 'massa-recheada', cod: 'CFR', peso: '250', un: 'g', img: 'mr-capeleti-frango-250g' },
        { nome: 'Capeleti de Frango',       cat: 'massa-recheada', cod: 'CFG', peso: '500', un: 'g', img: 'mr-capeleti-frango-500g' },

        // ----- Massa Fresca (14) -----
        { nome: 'Massa Fresca Talharim',    cat: 'massa-fresca', cod: 'TAL', peso: '500', un: 'g', img: 'mf-talharim-500g' },
        { nome: 'Massa Fresca Fettucine',   cat: 'massa-fresca', cod: 'FET', peso: '500', un: 'g', img: 'mf-fettucine-500g' },
        { nome: 'Massa Fresca Espaguete',   cat: 'massa-fresca', cod: 'ESP', peso: '500', un: 'g', img: 'mf-espaguete-500g' },
        { nome: 'Massa em Rolo',            cat: 'massa-fresca', cod: 'MRO', peso: '400', un: 'g', img: 'mf-massa-rolo-400g' },
        { nome: 'Massa para Panqueca',      cat: 'massa-fresca', cod: 'PAN', peso: '300', un: 'g', img: 'mf-panqueca-300g' },
        { nome: 'Massa Rolo Folhada',       cat: 'massa-fresca', cod: 'MRF', peso: '300', un: 'g', img: 'mf-rolo-folhada-300g' },
        { nome: 'Massa Disco Folhada',      cat: 'massa-fresca', cod: 'MDF', peso: '300', un: 'g', img: 'mf-disco-folhada-300g' },
        { nome: 'Massa para Lasanha',       cat: 'massa-fresca', cod: 'LAS', peso: '500', un: 'g', img: 'mf-lasanha-500g' },
        { nome: 'Massa Pastelão de Forno',  cat: 'massa-fresca', cod: 'PTF', peso: '300', un: 'g', img: 'mf-pastelao-forno-300g' },
        { nome: 'Massa para Pastel',        cat: 'massa-fresca', cod: 'PA2', peso: '200', un: 'g', img: 'mf-pastel-200g-a' },
        { nome: 'Massa para Pastel',        cat: 'massa-fresca', cod: 'PB2', peso: '200', un: 'g', img: 'mf-pastel-200g-b' },
        { nome: 'Massa para Pastel',        cat: 'massa-fresca', cod: 'PA4', peso: '400', un: 'g', img: 'mf-pastel-400g' },
        { nome: 'Massa para Pastel',        cat: 'massa-fresca', cod: 'PA5', peso: '500', un: 'g', img: 'mf-pastel-500g-a' },
        { nome: 'Massa para Pastel',        cat: 'massa-fresca', cod: 'PB5', peso: '500', un: 'g', img: 'mf-pastel-500g-b' },

        // ----- Linha Seca (10) -----
        { nome: 'Snacks de Churrasco',      cat: 'linha-seca', cod: 'SCH', peso: '90',  un: 'g', img: 'ls-snacks-churrasco-90g' },
        { nome: 'Snacks de Bacon',          cat: 'linha-seca', cod: 'SBA', peso: '90',  un: 'g', img: 'ls-snacks-bacon-90g' },
        { nome: 'Snacks Tradicional',       cat: 'linha-seca', cod: 'STR', peso: '90',  un: 'g', img: 'ls-snacks-tradicional-90g' },
        { nome: 'Canudinhos',               cat: 'linha-seca', cod: 'CAN', peso: '200', un: 'g', img: 'ls-canudinhos-200g' },
        { nome: 'Farinha de Rosca',         cat: 'linha-seca', cod: 'FR5', peso: '500', un: 'g', img: 'ls-farinha-rosca-500g' },
        { nome: 'Farinha de Rosca',         cat: 'linha-seca', cod: 'FR2', peso: '200', un: 'g', img: 'ls-farinha-rosca-200g' },
        { nome: 'Massa Pizza Coquetel',     cat: 'linha-seca', cod: 'PZC', peso: '250', un: 'g', img: 'ls-pizza-coquetel-250g' },
        { nome: 'Massa Pizza Família',      cat: 'linha-seca', cod: 'PZF', peso: '250', un: 'g', img: 'ls-pizza-familia-250g' },
        { nome: 'Massa Pizza',              cat: 'linha-seca', cod: 'PZ1', peso: '150', un: 'g', img: 'ls-pizza-150g' },
        { nome: 'Massa Pizza Brotinho',     cat: 'linha-seca', cod: 'PZB', peso: '60',  un: 'g', img: 'ls-pizza-brotinho-60g' },

        // ----- Pão de Alho (2) -----
        { nome: 'Pão de Alho Picante',      cat: 'pao-alho', cod: 'PAP', peso: '450', un: 'g', img: 'pa-pao-alho-picante-450g' },
        { nome: 'Pão de Alho Tradicional',  cat: 'pao-alho', cod: 'PAT', peso: '450', un: 'g', img: 'pa-pao-alho-tradicional-450g' }
    ];

    /* ---------- Elementos ---------- */
    const grid    = document.getElementById('produtosGrid');
    const vazio   = document.getElementById('produtosVazio');
    const verMais = document.getElementById('verMais');
    const filtros = document.querySelectorAll('.filtro');

    if (!grid) return;

    const POR_PAGINA = 9;
    let categoriaAtual = 'todos';
    let visiveis = POR_PAGINA;

    /* ---------- Render ---------- */
    function escapar(txt) {
        return String(txt).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function montarCard(p, i) {
        const meta = CATEGORIAS[p.cat] || { rotulo: '', cor: 'vermelho' };
        const nome = escapar(p.nome);

        return '' +
        '<article class="produto" style="animation-delay:' + (i % POR_PAGINA * 0.04).toFixed(2) + 's">' +
            '<div class="produto-quadro">' +
                '<div class="produto-foto">' +
                    '<img src="assets/produtos/' + p.img + '.png" alt="' + nome + '" loading="lazy" ' +
                         'onerror="this.closest(\'.produto-foto\').classList.add(\'is-empty\')">' +
                '</div>' +
                '<div class="produto-lateral">' +
                    '<div class="produto-faixa produto-faixa--' + meta.cor + '">' +
                        '<span class="cat">' + escapar(meta.rotulo) + '</span>' +
                        '<span class="nome">' + nome + '</span>' +
                    '</div>' +
                    '<div class="produto-peso">' +
                        '<span class="codigo">' + escapar(p.cod) + '</span>' +
                        '<span class="valor">' + escapar(p.peso) + '<small>' + escapar(p.un) + '</small></span>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<h2 class="produto-nome">' + nome + '</h2>' +
        '</article>';
    }

    function filtrados() {
        return categoriaAtual === 'todos'
            ? PRODUTOS
            : PRODUTOS.filter(function (p) { return p.cat === categoriaAtual; });
    }

    function render() {
        const lista = filtrados();
        const fatia = lista.slice(0, visiveis);

        grid.innerHTML = fatia.map(montarCard).join('');

        vazio.hidden = lista.length > 0;
        verMais.parentElement.hidden = visiveis >= lista.length;
    }

    /* ---------- Filtros ---------- */
    filtros.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filtros.forEach(function (b) {
                b.classList.remove('is-active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('is-active');
            btn.setAttribute('aria-selected', 'true');

            categoriaAtual = btn.dataset.filtro;
            visiveis = POR_PAGINA;
            render();

            // atualiza a URL sem recarregar
            const url = new URL(window.location);
            categoriaAtual === 'todos'
                ? url.searchParams.delete('categoria')
                : url.searchParams.set('categoria', categoriaAtual);
            history.replaceState(null, '', url);
        });
    });

    /* ---------- Ver mais ---------- */
    verMais.addEventListener('click', function () {
        visiveis += POR_PAGINA;
        render();
    });

    /* ---------- Categoria vinda da URL ---------- */
    const params = new URLSearchParams(window.location.search);
    const inicial = params.get('categoria');

    if (inicial && CATEGORIAS[inicial]) {
        const alvo = document.querySelector('.filtro[data-filtro="' + inicial + '"]');
        if (alvo) { alvo.click(); return; }
    }

    render();

})();
