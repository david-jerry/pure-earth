
interface Transition {
    initialX: number;
    intialY: number;
    finalX: number;
    finalY: number;
}

interface Data {
    image: string;
    title: string;
    description: string;
}
interface CurrentSlide {
    data: Data;
    index: number;
}