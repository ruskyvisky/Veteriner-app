package veterinerapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import veterinerapp.entity.User;
import veterinerapp.repository.IUserRepository;

import java.util.List;
@RestController
@RequestMapping("/api/v1/users")
public class UserController {



        private final IUserRepository userRepository;

        @Autowired
        public UserController(IUserRepository userRepository) {
            this.userRepository = userRepository;
        }



}
