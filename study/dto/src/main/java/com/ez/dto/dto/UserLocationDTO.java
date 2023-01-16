package com.ez.dto.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserLocationDTO {
    private Long userId;
    private String email;
    private String place;
    private double longitude;
    private double latitude;
}