/**
 * Converte um texto em um slug de URL amigável.
 *
 * - Remove acentos e caracteres especiais
 * - Substitui espaços por hífens
 * - Converte para letras minúsculas
 *
 * @param text - O texto de entrada (ex: título, nome, etc.)
 * @returns O slug gerado (ex: "titulo-da-pagina")
 *
 * @example
 * slugify("Título da Página!") // "titulo-da-pagina"
 *
 * slugify("   isso   é   um   teste   ") // "isso-e-um-teste"
 *
 * slugify("olá@#$ mundo*&()") // "ola-mundo"
 *
 * slugify("ESTE É UM TEXTO") // "este-e-um-texto"
 *
 * slugify("") // ""
 *
 * slugify("Capítulo 12: Parte 3") // "capitulo-12-parte-3"
 *
 * slugify("texto_com\ttabs") // "texto-com-tabs"
 *
 * slugify("a  --  b") // "a-b"
 *
 * slugify("   ---Hello---World---   ") // "hello-world"
 *
 * slugify("Texto 😀 com emoji") // "texto-com-emoji"
 *
 * slugify("João, maçã e feijão com ç") // "joao-maca-e-feijao-com-c'"
 *
 */
export function slugify(text: string): string {
  return text
    .normalize('NFD') // separa acentos
    .replace(/[\u0300-\u036f]/g, '') // remove diacríticos
    .replace(/[_\t]+/g, ' ') // substitui tabs e underscores por espaço
    .replace(/[^a-zA-Z0-9\s-]/g, '') // remove caracteres especiais
    .trim() // remove espaços nas bordas
    .replace(/(\s|\-)+/g, '-') // troca multiplos espaços ou hífens por hífen
    .replace(/(^\-|\-$)+/g, '') // remove hífens nas bordas
    .toLowerCase(); // converte para minúsculas
}
