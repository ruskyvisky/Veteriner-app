package veterinerapp.auth;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import veterinerapp.Config.JwtService;
import veterinerapp.auth.Requests.LoginRequest;
import veterinerapp.auth.Requests.RegisterRequest;
import veterinerapp.entity.User;
import veterinerapp.response.ApiResponse;
import veterinerapp.enums.Message;
import veterinerapp.repository.IUserRepository;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthService {
    @Autowired
    private final JwtService jwtService;
    private final IUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<ApiResponse> register(RegisterRequest registerRequest) {
        var user = User.builder()
                .name(registerRequest.getName())
                .surname(registerRequest.getSurname())
                .username(registerRequest.getUsername())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .phoneNumber(registerRequest.getPhoneNumber())
                .role(registerRequest.getRole())
                .isActive(true)
                .createdAt(LocalDateTime.now())

                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);

        return new ResponseEntity<>(ApiResponse.builder().data(userRepository.save(user)).message(Message.SUCCESS.getDesc()).build(), HttpStatus.OK);

    }

    public ResponseEntity<ApiResponse> login(LoginRequest loginRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getUsername(),
                            loginRequest.getPassword()
                    )
            );

            var user = userRepository.findByUsername(loginRequest.getUsername()).orElseThrow();

            var jwtToken = jwtService.generateToken(user);

            // ApiResponse oluşturma ve ResponseEntity içine sarma
            ApiResponse response = ApiResponse.builder()
                    .data(jwtToken)
                    .message(Message.SUCCESS.getDesc())
                    .build();

            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(ApiResponse.builder().message(Message.FORBIDDEN.getDesc()).build(), HttpStatus.UNAUTHORIZED);
        }
    }






}
