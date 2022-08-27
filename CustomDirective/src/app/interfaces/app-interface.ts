export interface ICaroouselContext {
    $implicit: string,
    controller:{
        next: () => void,
        prev: ()=> void,
    }
}