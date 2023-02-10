package simple.mind.simplifiedjs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;

@SpringBootApplication
@Controller
public class JSApplication {

  public static void main(String[] args) {
    SpringApplication.run(JSApplication.class, args);
  }

  public String index() {
    return "index";
  }
}
