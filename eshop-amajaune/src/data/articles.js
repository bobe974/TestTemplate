export const articles = [
  {
    id: 1,
    nom: "T-shirt oversize",
    qte: 12,
    categorie: "Vêtements",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-12-15"
  },
  {
    id: 2,
    nom: "Casque Bluetooth",
    qte: 5,
    categorie: "Électronique",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-12-10"
  },
  {
    id: 3,
    nom: "Chaussures de sport",
    qte: 8,
    categorie: "Chaussures",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-12-08"
  },
  {
    id: 4,
    nom: "Sac à dos urbain",
    qte: 3,
    categorie: "Accessoires",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-12-05"
  },
  {
    id: 5,
    nom: "Montre connectée",
    qte: 7,
    categorie: "Électronique",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-12-01"
  },
  {
    id: 6,
    nom: "Jean slim",
    qte: 10,
    categorie: "Vêtements",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=300&fit=crop&crop=center",
    dateDePublication: "2024-11-28"
  }
];

export function getProduct() {
  return articles;
}