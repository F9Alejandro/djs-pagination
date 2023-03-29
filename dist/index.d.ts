import { AttachmentBuilder, DMChannel, EmbedBuilder, TextChannel, UserResolvable } from "discord.js";
import { ButtonOption } from "./types/ButtonOption";
declare class Pagination {
    private readonly footerText;
    private readonly verification;
    private readonly timeout?;
    private readonly options?;
    private readonly Author?;
    private readonly files?;
    private message?;
    private readonly channel;
    private readonly pages;
    private index;
    private readonly dialogOptions;
    private readonly defaultOptions;
    /**
     *
     * @param {TextChannel | DMChannel} channel - The target channel
     * @param {EmbedBuilder[]} pages - Embed pages
     * @param {string} [footerText] - Optional footer text, will show `Text 1 of 5` if you pass `Text`, for example
     * @param {number} timeout - How long button need to be active
     * @param {ButtonOption[]} options - optional options for the buttons
     * @param {UserResolvable} Author - To limit the pagination to a specific author
     * @param {AttachmentBuilder[]} files - Optional files to attach
     */
    constructor(channel: TextChannel | DMChannel, pages: EmbedBuilder[], footerText?: string, verification?: boolean, timeout?: number | undefined, options?: ButtonOption[] | undefined, Author?: UserResolvable | undefined, files?: AttachmentBuilder[] | undefined);
    /**
     * Starts the pagination
     */
    paginate(): Promise<void>;
}
export { ButtonOption, Pagination };
//# sourceMappingURL=index.d.ts.map