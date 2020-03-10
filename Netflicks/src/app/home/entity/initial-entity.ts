export class HomepageInitial {
    // TRENDING: GenreObj[] = [];
    // SCI_FI: GenreObj[] = [];
    // ADVENTURE: GenreObj[] = [];
    // HORROR: GenreObj[] = [];
    // ROMANCE: GenreObj[] = [];
    // LOVE: GenreObj[] = [];
    // FANTASY: GenreObj[] = [];
    // COMEDY: GenreObj[] = [];

    genreOrder: string[] = [];
}

export class GenreObj {
    screenshots: string[] = [];
    // tslint:disable-next-line:variable-name
    _id: string;
    genreId: string;
    title: string;
    genreTitle: string;
    description: string;
    displayImg: string;
    category: string[] = [];
}

export class GenreFile extends GenreObj {
    filename: string;
    lengthInString: string;
}