import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface ImageProps extends Omit<NextImageProps, 'alt'> {
     alt: string;
     className?: string;
}

export function Image({ className, ...props }: ImageProps) {
     return (
          <div className={cn('relative overflow-hidden', className)}>
               <NextImage
                    {...props}
                    className={cn(
                         'object-cover transition-all duration-300',
                         props.className
                    )}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
          </div>
     );
} 