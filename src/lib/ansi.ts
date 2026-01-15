export const ANSI = {
    RESET: "\u001b[0m",
    BOLD: "\u001b[1m",

    // Catppuccin Mocha Palette (Approximate ANSI 256 or TrueColor)
    // Using standard ANSI colors where possible for better compatibility, 
    // or specific RGB/256 codes if needed. Let's stick to standard extended colors for now.

    // Standard mapped
    RED: "\u001b[31m",
    GREEN: "\u001b[32m",
    YELLOW: "\u001b[33m",
    BLUE: "\u001b[34m",
    MAGENTA: "\u001b[35m", // Pink/Mauve
    CYAN: "\u001b[36m",    // Teal/Sky
    WHITE: "\u001b[37m",

    // Specific Catppuccin approximations
    ROSEWATER: "\u001b[38;5;224m",
    FLAMINGO: "\u001b[38;5;217m",
    PINK: "\u001b[38;5;212m",
    MAUVE: "\u001b[38;5;183m",
    RED_CTP: "\u001b[38;5;203m",
    MAROON: "\u001b[38;5;167m",
    PEACH: "\u001b[38;5;209m",
    YELLOW_CTP: "\u001b[38;5;221m",
    GREEN_CTP: "\u001b[38;5;120m",
    TEAL: "\u001b[38;5;158m",
    SKY: "\u001b[38;5;117m",
    SAPPHIRE: "\u001b[38;5;75m",
    BLUE_CTP: "\u001b[38;5;111m",
    LAVENDER: "\u001b[38;5;147m",
    TEXT: "\u001b[38;5;254m",
    SUBTEXT1: "\u001b[38;5;248m",
    SUBTEXT0: "\u001b[38;5;243m",
    OVERLAY2: "\u001b[38;5;240m",
    OVERLAY1: "\u001b[38;5;237m",
    OVERLAY0: "\u001b[38;5;235m",
};

export const wrap = (text: string, color: string) => `${color}${text}${ANSI.RESET}`;

export const green = (text: string) => wrap(text, ANSI.GREEN_CTP);
export const red = (text: string) => wrap(text, ANSI.RED_CTP);
export const blue = (text: string) => wrap(text, ANSI.BLUE_CTP);
export const yellow = (text: string) => wrap(text, ANSI.YELLOW_CTP);
export const magenta = (text: string) => wrap(text, ANSI.MAUVE);
export const cyan = (text: string) => wrap(text, ANSI.TEAL);
export const peach = (text: string) => wrap(text, ANSI.PEACH);
export const mauve = (text: string) => wrap(text, ANSI.MAUVE);
export const text = (text: string) => wrap(text, ANSI.TEXT);
export const subtext = (text: string) => wrap(text, ANSI.SUBTEXT0);
export const overlay = (text: string) => wrap(text, ANSI.OVERLAY1);
export const bold = (text: string) => `${ANSI.BOLD}${text}${ANSI.RESET}`;
