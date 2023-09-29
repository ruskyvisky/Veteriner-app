package veterinerapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "animals")
@Builder
public class Animal extends BaseEntity{

    private String animalName;
    private String animalType;
    private String animalAge;
    private String animalRace;
    private String parentName;
    private String parentContact;
    private String specialNote;
    private List<String> vaccines;
    private LocalDateTime lastRendezvous;
    private List<String> medicines;
    private LocalDateTime createdAt;




}
