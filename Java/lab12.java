import java.util.HashSet;


class ExitException extends Exception {
    private int id;
    private HashSet<Integer> container = new HashSet<Integer>();
    private String error;

    public ExitException(int id, HashSet<Integer> cont, String error) {
        this.id = id;
        this.container = cont;
        this.error = error;
    }


    public String toString() {
        return "Произошла ошибка (" + error + ")";
    }
}

class MySet extends HashSet {
    HashSet<Integer> container = new HashSet<Integer>();

    void add(int a) {
        container.add(a);
    }

    Integer GetEl (int id) {
        if (id < container.size())
            return(container.stream().toList().get(id));
        else try {
            throw new ExitException(id, container, "выход за пределы");
        } catch (ExitException e) {
            e.printStackTrace();
        }
        return 0;
    }

    void println () {
        System.out.println(container);
    }
}

public class lab12 {
    public static void main(String[] args) {
        MySet cont = new MySet();
        cont.add(4);
        cont.add(5);
        cont.add(6);

        cont.println();
        System.out.println(cont.GetEl(2));
    }
}
