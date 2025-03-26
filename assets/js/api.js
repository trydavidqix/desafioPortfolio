async function fetchProfileData() {
    try {
        // Tentativa 1: URL direto do GitHub (main branch)
        const githubUrl = 'https://raw.githubusercontent.com/trydavidqix/desafioPortfolio/main/data/profile.json';
        
        // Tentativa 2: URL alternativo (caminho completo como nos ícones)
        const alternativeUrl = 'https://raw.githubusercontent.com/trydavidqix/desafioPortfolio/refs/heads/main/data/profile.json';
        
        // Tentativa 3: Arquivo local
        const localUrl = './data/profile.json';
        
        // Lista de URLs para tentar
        const urlsToTry = [githubUrl, alternativeUrl, localUrl];
        
        // Tentar cada URL em sequência
        for (const url of urlsToTry) {
            try {
                console.log(`Tentando carregar dados de: ${url}`);
                const response = await fetch(url);
                
                if (response.ok) {
                    const data = await response.json();
                    console.log(`Dados carregados com sucesso de: ${url}`);
                    return data;
                }
            } catch (error) {
                console.warn(`Falha ao tentar: ${url}`, error);
            }
        }
        
        throw new Error('Não foi possível carregar os dados de nenhuma fonte');
    } catch (error) {
        console.error('Erro ao carregar os dados do perfil:', error);
        
        // Retornar dados mínimos para evitar erros na interface
        return {
            name: "Erro ao carregar dados",
            photo: "assets/img/perfil.jpg",
            job: "Verifique o console para detalhes",
            location: "Ocorreu um erro",
            phone: "(000) 000-0000",
            email: "erro@exemplo.com",
            skills: {
                hardSkills: [],
                softSkills: ["Erro ao carregar habilidades"]
            },
            languages: ["Erro ao carregar idiomas"],
            portfolio: [{
                name: "Erro ao carregar portfólio",
                url: "#",
                github: false
            }],
            professionalExperience: [{
                name: "Erro ao carregar experiência",
                period: "N/A",
                description: "Não foi possível carregar os dados de experiência profissional."
            }]
        };
    }
}
