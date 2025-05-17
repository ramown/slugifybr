import { describe, expect, it } from 'vitest';
import { slugify } from '@/core/slugify';

describe('slugify', () => {
  it('should convert text to slug', () => {
    expect(slugify('Título da Página!')).toBe('titulo-da-pagina');
  });

  it('should remove multiple spaces and trim', () => {
    expect(slugify('   isso   é   um   teste   ')).toBe('isso-e-um-teste');
  });

  it('should handle special characters', () => {
    expect(slugify('olá@#$ mundo*&()')).toBe('ola-mundo');
  });

  it('should convert uppercase to lowercase', () => {
    expect(slugify('ESTE É UM TEXTO')).toBe('este-e-um-texto');
  });

  it('should handle empty strings', () => {
    expect(slugify('')).toBe('');
  });

  it('should keep numbers', () => {
    expect(slugify('Capítulo 12: Parte 3')).toBe('capitulo-12-parte-3');
  });

  it('should replace underscores and tabs as spaces', () => {
    expect(slugify('texto_com\ttabs')).toBe('texto-com-tabs');
  });

  it('should collapse multiple hyphens into one if needed', () => {
    expect(slugify('a  --  b')).toBe('a-b');
  });

  it('should remove leading and trailing hyphens', () => {
    expect(slugify('   ---Hello---World---   ')).toBe('hello-world');
  });

  it('should remove emojis and non-latin characters', () => {
    expect(slugify('Texto 😀 com emoji')).toBe('texto-com-emoji');
  });

  it('should handle characters with tilde and cedilla', () => {
    expect(slugify('João, maçã e feijão com ç')).toBe(
      'joao-maca-e-feijao-com-c',
    );
  });
});
