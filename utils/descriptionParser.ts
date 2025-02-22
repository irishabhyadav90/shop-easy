export const parseDescription = (description: string): string => {
    if (!description) return '';

    return description
        // Remove HTML tags and entities
        .replace(/<\/?[^>]+(>|$)/g, '') // Removes HTML tags
        .replace(/&nbsp;/g, ' ')        // Replace &nbsp; with space
        .replace(/&amp;/g, '&')         // Replace &amp; with &
        .replace(/&lt;/g, '<')          // Replace &lt; with 
        .replace(/&gt;/g, '>')          // Replace &gt; with >
        // Add proper line breaks
        .replace(/<\/li>/g, '\n')       // Add newline after list items
        .replace(/<\/p>/g, '\n\n')      // Add double newline after paragraphs
        .trim();                        // Remove extra whitespace
};