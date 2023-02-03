package com.ez.config;

import com.ez.model.Authority;
import com.ez.model.Customer;
import com.ez.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

// own AuthenticationProvider
@Component
public class UsernamePwdAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    private CustomerRepository customerRepository;

    // BCryptPasswordEncoder
    @Autowired
    private PasswordEncoder passwordEncoder;

    // return Authentication object with details of authentication success or not to ProviderManager
    // if authentication success then Authentication object is stored in the SecurityContext object
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        // email from "Login" form
        String username = authentication.getName();
        // raw password from "Login form"
        String pwd = authentication.getCredentials().toString();
        List<Customer> customer = customerRepository.findByEmail(username);


        // draft
//        customerRepository.


        if (customer.size() > 0) {
            // if raw password is match with password in database
            if (passwordEncoder.matches(pwd, customer.get(0).getPwd())) {
                // authenticated(login successful)
                return new UsernamePasswordAuthenticationToken(username, pwd, getGrantedAuthorities(customer.get(0).getAuthorities()));
            } else { // invalid password
                throw new BadCredentialsException("Invalid password!");
            }
        }else {
            throw new BadCredentialsException("No user registered with this details!");
        }
    }

    private List<GrantedAuthority> getGrantedAuthorities(Set<Authority> authorities) {
        List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        for (Authority authority : authorities) {
            grantedAuthorities.add(new SimpleGrantedAuthority(authority.getName()));
        }
        return grantedAuthorities;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }

}
