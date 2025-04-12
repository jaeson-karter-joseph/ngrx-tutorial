import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-human-body',
  imports: [NgFor, FormsModule],
  templateUrl: './human-body.component.html',
  styleUrl: './human-body.component.scss'
})
export class HumanBodyComponent {
  bodyParts = [
    { key: 'head', name: 'Head' },
    { key: 'arm', name: 'Arm' },
    { key: 'leg', name: 'Leg' },
    { key: 'torso', name: 'Torso' },
    { key: 'hand', name: 'Hand' },
    { key: 'foot', name: 'Foot' },
    { key: 'eye', name: 'Eye' },
    { key: 'ear', name: 'Ear' },
    { key: 'nose', name: 'Nose' },
    { key: 'mouth', name: 'Mouth' },
    { key: 'shoulder', name: 'Shoulder' },
    { key: 'knee', name: 'Knee' },
    { key: 'elbow', name: 'Elbow' },
    { key: 'wrist', name: 'Wrist' },
    { key: 'stomach', name: 'stomach' },
    // Add more body parts as needed
  ];

  selectedParts: { [key: string]: boolean } = {
    head: false,
    arm: false,
    leg: false,
    ankle: false,
    elbow: false,
    eye: false,
    ear: false,
    foot: false,
    hand: false,
    knee: false,
    mouth: false,
    nose: false,
    shoulder: false,
    torso: false,
    wrist: false,
    stomach: true,
    // Initialize other parts as false
  };

  onPartSelectionChange(partKey: string): void {
    console.log(`${partKey} selection changed:`, this.selectedParts[partKey]);
  }
}
