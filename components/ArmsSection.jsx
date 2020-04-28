import React from 'react';
import EachArm from './EachArm';
import {Grid} from '@material-ui/core/';

export default function ArmsSection() {
    const info = [
        {name: 'Developers and Interior Designers', description: '3D Renderings ( Interior and Exterior ), Branding and Marketing Brochure, Walkthrough and 3D Animations.', path: '/static/img/missionImage.png', color:'#222222'},
        {name: 'Architects ', description: 'Concept Design, Facade Enhancement, 2D Rendered Floor Plans, 3D Renderings ( Interiors and Exteriors ), 3D Animations. ', path: '/static/img/building4.png', color:'#030302'},
        {name: 'Corporate Firms & Private Individuals', description: ' 3D Rendering for Office Design / Renovation, Interior / Exteriors Design, Office Makeover, Furnishing.', path: '/static/img/building2.png', color:'#774B2B'},
        {name: 'Construction ', description: 'Sub – Structure, Super-structure, Finishes, Furnishing, Lighting, Painting, Furnitures, Office Partition Works, Cladding, etc', path: '/static/img/building3.png', color:'#F7BC7C'},
    ]
    return (
        <Grid container>
            {info.map(each => (
                <EachArm {...each} />
            ))}
        </Grid>
    )
}
