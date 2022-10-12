
import javax.swing.*;
import java.awt.*;



class SimpleFrame  extends JFrame {
    public SimpleFrame() {
        setSize(DEFAULT_WIDTH, DEFAULT_HEIGHT);
        this.getContentPane().add(new ShapesPanel());
    }

    public static final int DEFAULT_WIDTH = 1000;
    public static final int DEFAULT_HEIGHT = 800;
}


public class lab13 {
    public static void main(String[] args){
        SimpleFrame frame = new SimpleFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}

class ShapesPanel extends JPanel{
    public void paintComponent(Graphics g){
        super.paintComponent(g);
        setBackground(Color.pink);

        g.setColor(Color.cyan);
        g.drawOval(300, 100, 100, 100);
        g.drawOval(275, 190,150,150);
        g.drawOval(250, 330, 200, 200);

        g.setColor(Color.white);
        g.fillOval(300, 100, 100, 100);
        g.fillOval(275, 190,150,150);
        g.fillOval(250, 330, 200, 200);

        g.setColor(Color.gray);
        int x[] = { 280, 310, 340, 360, 390, 420 };
        // y координаты вершин
        int y[] = { 110, 100, 60, 60, 100, 110 };
        // количество вершин
        int numberofpoints = 6;
        Polygon p = new Polygon(x, y, numberofpoints);
        g.fillPolygon(p);

        g.setColor(Color.darkGray);
        g.drawPolygon(p);

        g.setColor(Color.black);
        g.fillOval(325, 140,10,10);
        g.fillOval(365, 140,10,10);
        //g.drawLine(350, 150, 352, 165);
        g.drawArc(340, 175, 20, 7, 130, 270);

        g.drawLine(285,223,240, 320);
        g.drawLine(415, 223, 490, 300);

        g.drawLine(500, 185,470, 530);
        g.drawLine(500,185, 450, 90);
        g.drawLine(500,185, 480, 80);
        g.drawLine(500,185, 510, 80);
        g.drawLine(500,185, 540, 90);
        g.drawLine(500,185, 570, 110);



        int x1[] = { 350, 370, 350};
        // y координаты вершин
        int y1[] = { 150, 159, 160};
        // количество вершин
        int numberofpoints1 = 3;
        Polygon p1 = new Polygon(x1, y1, numberofpoints1);
        g.drawPolygon(p1);

        g.setColor(Color.orange);
        g.fillPolygon(p1);

        g.setColor(Color.black);
        Font myFont = new Font ("Comic Sans", 1, 17);
        g.setFont (myFont);
        g.drawString("Авторы: Сергеев Н.О. и Шнабская А.К.", 601, 601);
        g.drawString("Группа: ПОВТ-19д", 601, 621);

        g.setColor(Color.red);
         myFont = new Font ("Comic Sans", 1, 17);
        g.setFont (myFont);
        g.drawString("Авторы: Сергеев Н.О. и Шнабская А.К.", 600, 600);
        g.drawString("Группа: ПОВТ-19д", 600, 620);
    }

}