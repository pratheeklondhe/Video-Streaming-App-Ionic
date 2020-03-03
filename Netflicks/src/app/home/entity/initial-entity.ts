export class HomepageInitial {
    SCI_FI: GenreObj[] = [];
    ADVENTURE: GenreObj[] = [];
    HORROR: GenreObj[] = [];
    ROMANCE: GenreObj[] = [];
    LOVE: GenreObj[] = [];
    FANTASY: GenreObj[] = [];
    COMEDY: GenreObj[] = [];
    TRENDING: GenreObj[] = [];
};

export class GenreObj {
    screenshots: string[] = [];
    _id: string;
    genreId: string;
    title: string;
    genreTitle: string;
    description: string;
    displayImg: string;
    category: string[] = [];
};

export class GenreFile extends GenreObj {
    filename: string;
    lengthInString: string;
}