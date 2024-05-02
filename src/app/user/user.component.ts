import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  selectedUsers: any[] = [];
  users: any[] = [];
  searchInput = new FormControl();
  options: any[] = [];
  filteredOptions: any[] = [];
  searchTerm: string = '';
  showDropdown: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data.users;
      this.options = this.users.map(user => user.firstName);
    });
  }

  onInputChange(): void {
    if (this.searchTerm.length >= 3) {
      this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(this.searchTerm.toLowerCase()));
      this.showDropdown = true;
    } else {
      this.showDropdown = false;
    }
  }

  toggleOption(option: string): void {
    const user = this.users.find(u => u.firstName === option);
    if (user) {
      const index = this.selectedUsers.findIndex(u => u.firstName === option);
      if (index === -1) {
        this.selectedUsers.push(user);
      } else {
        this.selectedUsers.splice(index, 1);
      }
    }
  }

  isSelected(option: string): boolean {
    return this.selectedUsers.some(u => u.firstName === option);
  }

  removeOption(user: any): void {
    const index = this.selectedUsers.indexOf(user);
    if (index !== -1) {
      this.selectedUsers.splice(index, 1);
      this.filteredOptions = this.filteredOptions.filter(option => option !== user.firstName);
    }
  }

  getUser(firstName: string): any {
    return this.users.find(u => u.firstName === firstName);
  }

  getSelectedOptionsAsString(): string {
    return this.selectedUsers.map(user => user.firstName).join(', ');
  }
}
