
interface Genre{
    public void WriteGanre(String name);
    public String GetNameGanre();
    public void DisplayGanre();
}

interface Autor{
    public void WriteAutor(String name);
    public String GetNameAutor();
    public void DisplayAutor();
}

 class Book implements Genre, Autor{
    String NameBook;
    String NameGenre;
    String NameAutor;

    void Book(){
        NameBook = "";
        NameGenre = "";
        NameAutor = "";
    }

    public void WriteBook(String name){
        NameBook = name;
    }

     @Override
     public void WriteGanre(String name) {
        NameGenre = name;
     }

     @Override
     public String GetNameGanre() {
        return NameGenre;
    }

    @Override
    public void DisplayGanre() {
        System.out.println(NameGenre);
    }

     @Override
     public void WriteAutor(String name) {
        NameAutor = name;
     }

     @Override
     public String GetNameAutor() {
        return NameAutor;
    }

    @Override
    public void DisplayAutor() {
        System.out.println(NameAutor);
    }
}

public class interfaces_1 {
    public static void main(String[] args){
        Book b1 = new Book();
        b1.WriteBook("Как правильно дарить подарки");
        b1.WriteAutor("Валерия Акакиевна");
        b1.WriteGanre("Мистика");

        String autor = b1.GetNameAutor();
        String genre = b1.GetNameGanre();
        System.out.println(autor+" "+genre);

        b1.DisplayAutor();
        b1.DisplayGanre();
    }
}
