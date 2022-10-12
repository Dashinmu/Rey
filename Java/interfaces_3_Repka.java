import java.util.ArrayList;
import java.util.List;

interface RepkaItem
{
    public String getNamePadezh();
}

class Person implements RepkaItem
{
    private String name;
    private String namePadezh;

    public String getNamePadezh(){
        return namePadezh;
    }

    public void pull(Person second){
        System.out.println(name+" за "+ second.getNamePadezh());
    }

    public Person(String name, String namePadezh)
    {
        this.name = name;
        this.namePadezh = namePadezh;
    }
}

class RepkaStory
{
    static void tell(List<Person> items) {

        Person first;
        Person second;
        for (int i = items.size() - 1; i > 0; i--) {
            first = items.get(i);
            second = items.get(i - 1);
            first.pull(second);
        }
    }
}

public class interfaces_3_Repka
{
    public static void main(String[] args)
    {
        List<Person> plot = new ArrayList<Person>();
        plot.add(new Person("Репка", "Репку"));
        plot.add(new Person("Дедка", "Дедку"));
        plot.add(new Person("Бабка", "Бабку"));
        plot.add(new Person("Внучка", "Внучку"));
        RepkaStory.tell(plot);
    }
}
