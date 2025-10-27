import Image, {ImageProps} from 'next/image';

export interface AppImageProps extends Omit<ImageProps, 'src'> {
    src: string;
}

const AppImage = ({src, alt, placeholder, ...props}: AppImageProps) => {

    const isPublicPath = src.startsWith('/');
    const imageSrc = isPublicPath ? src : src;

    return (
        <Image
            src={imageSrc}
            alt={alt || 'image'}
            placeholder={placeholder || "blur"}

            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9df//Z"
            {...props}
        />
    )
}
export default AppImage