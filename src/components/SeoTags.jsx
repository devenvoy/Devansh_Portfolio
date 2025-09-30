import { NextSeo } from 'next-seo';
import Head from 'next/head';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function SeoTags({
    title = 'Devansh Developer - Portfolio',
    description = 'Android developer crafting beautiful, functional mobile experiences with modern technologies.',
    image = 'https://res.cloudinary.com/dzbtr3w2l/image/upload/v1759226789/Devansh_1_v41itb.png',
    url = `https://devenvoy.github.io${basePath}`,
    type = 'website',
    author = 'Devansh Amdavadwala',
    twitterHandle = '@devansh_dev',
    locale = 'en_US'
}) {
    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="author" content={author} />
                <meta
                    name="keywords"
                    content="developer, portfolio, react, typescript, web development, full-stack, devenvoy, devansh, devansh amdavadwala, android, developer, android development, flutter development, flutter, dart, compose, jetpack compose, kotlin multiplatform, compose multiplatform, UI/UX, mobile development, software engineer"
                />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content={type} />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:image:secure_url" content={image} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={title} />
                <meta property="og:site_name" content="Devansh Portfolio" />
                <meta property="og:locale" content={locale} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={twitterHandle} />
                <meta name="twitter:creator" content={twitterHandle} />
                <meta name="twitter:url" content={url} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:image:alt" content={title} />

                {/* LinkedIn */}
                <meta property="og:site_name" content="Devansh Amdavadwala Portfolio" />
                <meta property="og:see_also" content="https://www.linkedin.com/in/devansh-amdavadwala" />

                {/* Pinterest */}
                <meta name="pinterest-rich-pin" content="true" />

                {/* Telegram */}
                <meta property="telegram:channel" content="@devenvoy" />

                {/* Discord */}
                {/* <meta name="theme-color" content="#2563eb" /> */}

                {/* Reddit */}
                <meta property="og:updated_time" content={new Date().toISOString()} />

                {/* Additional Meta Tags */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="Devansh Portfolio" />
                
                {/* Microsoft Tags */}
                <meta name="msapplication-TileColor" content="#2563eb" />
                <meta name="msapplication-TileImage" content={`${basePath}/mstile-150x150.png`} />
                <meta name="msapplication-config" content={`${basePath}/browserconfig.xml`} />

                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": author,
                            "url": url,
                            "image": image,
                            "sameAs": [
                                "https://www.linkedin.com/in/devansh-amdavadwala",
                                "https://github.com/devenvoy",
                                `https://twitter.com/${twitterHandle.replace('@', '')}`
                            ],
                            "jobTitle": "Android Developer",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Freelance"
                            },
                            "description": description,
                            "knowsAbout": [
                                "Android Development",
                                "Flutter",
                                "Kotlin",
                                "Jetpack Compose",
                                "Mobile Development",
                                "UI/UX Design"
                            ]
                        })
                    }}
                />

                {/* Portfolio Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "Devansh Developer Portfolio",
                            "url": url,
                            "description": description,
                            "author": {
                                "@type": "Person",
                                "name": author
                            },
                            "inLanguage": "en-US"
                        })
                    }}
                />

                {/* Canonical URL */}
                <link rel="canonical" href={url} />
                
                {/* Alternate Languages */}
                <link rel="alternate" hrefLang="en" href={url} />
                <link rel="alternate" hrefLang="x-default" href={url} />
            </Head>
            
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url: url,
                    title: title,
                    description: description,
                    images: [
                        {
                            url: image,
                            width: 1200,
                            height: 630,
                            alt: title,
                            type: 'image/png',
                        },
                        {
                            url: image,
                            width: 800,
                            height: 600,
                            alt: `${title} - Mobile`,
                        },
                    ],
                    site_name: 'Devansh Portfolio',
                    type: type,
                    locale: locale,
                }}
                twitter={{
                    handle: twitterHandle,
                    site: twitterHandle,
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[
                    {
                        name: 'application-name',
                        content: 'Devansh Portfolio'
                    },
                    {
                        name: 'mobile-web-app-capable',
                        content: 'yes'
                    },
                    {
                        name: 'format-detection',
                        content: 'telephone=no'
                    }
                ]}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: `${basePath}/favicon.ico`,
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: `${basePath}/apple-touch-icon.png`,
                        sizes: '180x180'
                    },
                    {
                        rel: 'manifest',
                        href: `${basePath}/site.webmanifest`
                    }
                ]}
            />
        </>
    );
}