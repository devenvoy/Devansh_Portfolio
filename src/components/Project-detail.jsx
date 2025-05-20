import { Card, Typography, Chip ,Link } from '@mui/material';
import { ExternalLink } from 'lucide-react';
import { mergeClasses } from '../utils/utils';

const ProjectDetails = ({
    project: { img, name, demo, description, technologies },
    layoutType = 'default',
}) => {
    return (
        <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
            {/* Image */}
            <div
                className={mergeClasses(
                    'flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12',
                    layoutType === 'default'
                        ? 'md:rounded-l-xl md:border-r'
                        : 'md:order-last md:rounded-r-xl md:border-l'
                )}
            >
                <Link 
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={img}
                        alt={`${name} preview`}
                        className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                        style={{ objectFit: 'cover' }}
                    />
                </Link>

            </div>

            {/* Content */}
            <div
                className={mergeClasses(
                    'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
                    layoutType === 'default' ? '' : 'md:order-first'
                )}
            >
                <Typography className="text-xl font-semibold text-gray-900">
                    {name}
                </Typography>
                <Typography className="text-base text-gray-700">{description}</Typography>
                <div className="flex flex-wrap gap-2">
                    {technologies?.map((technology, index) => (
                        <Chip key={index} label={technology} />
                    ))}
                </div>
                <Link 
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
                >
                    <ExternalLink />
                </Link>
            </div>
        </Card>
    );
};

export default ProjectDetails;