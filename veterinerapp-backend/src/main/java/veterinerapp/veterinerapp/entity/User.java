package veterinerapp.veterinerapp.entity;
import lombok.*;

import javax.persistence.Entity;
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class User extends BaseEntity {

    private String username;
    private String password;
    private String name;
    private String surname;
    private String phoneNumber;

    }
