export const articles = [
  {
    id: 1,
    nom: "T-shirt oversize",
    qte: 12,
    prix: 29.99,
    categorie: "Vêtements",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-12-15",
    description: "Un t-shirt oversize confortable et tendance, parfait pour un look décontracté."
  },
  {
    id: 2,
    nom: "Casque Bluetooth",
    qte: 5,
    prix: 89.99,
    categorie: "Électronique",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-12-10",
    description: "Casque sans fil avec son haute qualité et autonomie longue durée."
  },
  {
    id: 3,
    nom: "Chaussures de sport",
    qte: 8,
    prix: 119.99,
    categorie: "Chaussures",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-12-08",
    description: "Chaussures légères et respirantes idéales pour la course ou la marche."
  },
  {
    id: 4,
    nom: "Sac à dos urbain",
    qte: 3,
    prix: 59.99,
    categorie: "Accessoires",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-12-05",
    description: "Sac à dos pratique et stylé pour le quotidien ou les déplacements."
  },
  {
    id: 5,
    nom: "Montre connectée",
    qte: 7,
    prix: 199.99,
    categorie: "Électronique",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-12-01",
    description: "Montre intelligente avec suivi d'activité, notifications et design élégant."
  },
  {
    id: 6,
    nom: "Jean slim",
    qte: 10,
    prix: 79.99,
    categorie: "Vêtements",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-11-28",
    description: "Jean slim moderne et confortable, parfait pour toutes les occasions."
  },
  {
    id: 7,
    nom: "Lunettes de soleil",
    qte: 15,
    prix: 149.99,
    categorie: "Accessoires",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-11-25",
    description: "Lunettes de soleil stylées avec protection UV pour un look estival."
  },
  {
    id: 8,
    nom: "Livre de développement",
    qte: 6,
    prix: 45.99,
    categorie: "Livres",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-11-20",
    description: "Un guide complet pour apprendre les bases du développement web moderne."
  }
];

export function getProduct() {
  return articles;
}
