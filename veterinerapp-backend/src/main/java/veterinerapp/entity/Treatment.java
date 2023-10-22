package veterinerapp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "treatments")
@Builder
public class Treatment extends BaseEntity {

    private String treatmentType;
    private LocalDate createTime;


}




