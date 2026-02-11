declare module 'todo' {
    export function add(taskName: string): void;
    export function list(): string[];
    export function done(taskName: string): void;
    export function donelist(taskName: string): void;
    export function del(taskName: string): void;
}