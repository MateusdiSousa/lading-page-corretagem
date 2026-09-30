export const locations: Record<string, string> = {
    // Cidades
    'sao-paulo': 'São Paulo',
    'diadema': 'Diadema',
    'sao-bernardo-do-campo': 'São Bernardo do Campo',

    // Regiões
    'zona-sul': 'Zona Sul',
    'zona-norte': 'Zona Norte',
    'zona-leste': 'Zona Leste',
    'zona-oeste': 'Zona Oeste',
    'centro': 'Centro',

    // Bairros
    'vila-mascote': 'Vila Mascote',
    'sacomã': 'Sacomã',
    'jardim-botanico': 'Jardim Botânico',
    'jabaquara': 'Jabaquara',
    'cursino': 'Cursino',
};


export function formatLocation(value: string): string {
    return locations[value] ?? formatGenericLabel(value);
}

function formatGenericLabel(value: string): string {
    return value
        .split('-')
        .filter(Boolean)
        .map((word) => {
            return (
                word.charAt(0).toUpperCase() +
                word.slice(1)
            );
        })
        .join(' ');
}