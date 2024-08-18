export function createSlug(text: string): string {
  // Convert to lowercase
  const lowerText = text.toLowerCase()

  // Replace accented characters with their non-accented counterparts
  const normalizedText = lowerText
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  // Remove special characters and replace spaces with hyphens
  const slug = normalizedText.replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')

  // Remove any trailing or leading hyphens
  return slug.replace(/^-+|-+$/g, '')
}
