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

  @HostListener('document:keydown.escape')
  protected handleEscape(): void {
    this.closeMenu();
  }

  @HostListener('window:resize')
  protected handleResize(): void {
    if (window.innerWidth >= 832) {
      this.closeMenu();
    }
  }
}