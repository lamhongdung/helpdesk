package com.ez.helpdeskbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
// {code: 200, httpStatus: "OK", reason: "OK", message: "your request was successful"}
public class HttpResponse {
    private int httpStatusCode; // 200, 201, 400, 500,...
    private HttpStatus httpStatus;
    private String reason;
    private String message;
}
