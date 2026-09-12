import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // Tracks whether the mobile navigation menu is open.
  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  // Allows keyboard users to close the mobile menu with Escape
  @HostListener('document:keydown.escape')
  protected handleEscape(): void {
    this.closeMenu();
  }

  // Prevents the mobile menu from remaining open after switching to desktop.
  @HostListener('window:resize')
  protected handleResize(): void {
    if (window.innerWidth >= 832) {
      this.closeMenu();
    }
  }
}