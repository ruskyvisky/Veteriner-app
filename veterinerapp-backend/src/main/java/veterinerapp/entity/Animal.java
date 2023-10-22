package veterinerapp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
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
    @ElementCollection
    private List<String> vaccines;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "animal_id")
    private List<Treatment> treatments;
    private LocalDateTime lastRendezvous;
    @ElementCollection
    private List<String> medicines;
    private LocalDateTime createdAt;




}
