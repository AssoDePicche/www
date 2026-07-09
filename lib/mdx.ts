import { compileMDX } from 'next-mdx-remote/rsc';
import fs from 'fs';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeImagePlaceholder from 'rehype-image-placeholder';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import remarkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import remarkSmartypants from '@silvenon/remark-smartypants';
import remarkTableofContents from 'remark-toc';
import remarkUnwrapImages from 'remark-unwrap-images';
import Card from '@components/Blog/Card';
// Import your existing components hook
import { useMDXComponents } from '@components/Blog/MDX';

export const fetchMd = async (filePath: string) => {
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    // Grab your styled components setup
    const mdxComponents = useMDXComponents();

    const { content, frontmatter } = await compileMDX({
        source: fileContents,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                format: 'mdx',
                remarkPlugins: [
                    remarkGfm,
                    remarkHeadings,
                    remarkSlug,
                    remarkSmartypants,
                    [remarkTableofContents, { tight: true }],
                    remarkUnwrapImages,
                ],
                rehypePlugins: [
                    rehypeCodeTitles,
                    rehypePrism,
                    [rehypeImagePlaceholder, { dir: 'public' }],
                ],
            },
        },
        // Combine your existing design elements with your custom Card component
        components: {
            ...mdxComponents,
            Card,
        },
    });

    return { content, frontmatter };
};
