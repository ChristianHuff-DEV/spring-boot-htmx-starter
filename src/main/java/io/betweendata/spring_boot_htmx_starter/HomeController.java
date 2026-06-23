package io.betweendata.spring_boot_htmx_starter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/")
public class HomeController {

    private int counter = 0;

    @GetMapping
    public String index(Model model) {
        model.addAttribute("counter", counter);
        return "index";
    }

    @PostMapping("/count")
    public String count(@RequestParam String direction, Model model) {

        if (direction.equals("up")) {
            model.addAttribute("counter", ++counter);
        } else {
            model.addAttribute("counter", --counter);
        }

        return "components/counter";
    }
}
