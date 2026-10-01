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
    'abc': 'ABC',

    // Bairros
    'vila-mascote': 'Vila Mascote',
    'sacomã': 'Sacomã',
    'jardim-botanico': 'Jardim Botânico',
    'jabaquara': 'Jabaquara',
    'cursino': 'Cursino',
    'sacoma': 'Sacomã'
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