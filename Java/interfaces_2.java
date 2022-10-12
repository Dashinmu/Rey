import java.awt.*;

public class interfaces_2
{
    public static void main(String[] args) throws Exception
    {
    }

    public interface Animal
    {
        Color getColor();

        Integer getAge();
    }


    public static abstract class Fox implements Animal
    {
        public String getName()
        {
            return "Fox";
        }
    }

    class FoxInf extends Fox {
        public String getName(){
            return super.getName();
        }

        public Color getColor(){

            return null;
        }

        public Integer getAge(){

            return null;
        }
    }
}
