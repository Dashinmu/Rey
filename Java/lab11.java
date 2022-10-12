//I study at the Perm State Technical University.
public class lab11 {
    public static void main(String[] args){
        String str = "I did not study at the Perm State University.";
        StringBuffer strBuf = new StringBuffer("I did not study at the Perm State University.");


        //работа с String_________________________________________________________________
        System.out.println(str);
        System.out.println("Длина String до: "+str.length());
        String s1,s2,s3,s4,s5,s6;
        s1 = str.substring(0,2);
        s2 = str.substring(10,str.length()-11);
        s3 = str.substring(str.length()-11);
        s4 = s1.concat(s2);
        s5 = s4.concat("Technical ");
        s6 = s5.concat(s3);
        System.out.println("Длина String после: "+s6.length());
        System.out.println(s6);

        System.out.println();
        //работа с StringBuffer___________________________________________________________
        System.out.println(strBuf);
        System.out.println("Емкость до: "+strBuf.capacity());
        System.out.println("Длина StringBuffer до: "+strBuf.length());
        strBuf.delete(2,10);
        strBuf.insert(strBuf.length()-11, "Technical ");
        System.out.println("Емкость после: "+strBuf.capacity());
        System.out.println("Длина StringBuffer после: "+strBuf.length());
        System.out.println(strBuf);
    }
}
