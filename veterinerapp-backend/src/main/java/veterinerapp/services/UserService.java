package veterinerapp.services;


import java.time.LocalDateTime;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import veterinerapp.entity.User;

import lombok.RequiredArgsConstructor;
import veterinerapp.repository.IUserRepository;

@Service
@RequiredArgsConstructor
public class UserService {

    private final IUserRepository userRepository;

    public UserDetailsService userDetailsService() {

        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) {
                return userRepository.findByUsername(username);

            }
        };
    }

    public User save(User newUser) {

        if (newUser.getId() != null) {
            newUser.setCreatedAt(LocalDateTime.now());
        }


        return userRepository.save(newUser);
    }

}