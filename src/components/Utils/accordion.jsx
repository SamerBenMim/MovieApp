import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions({ epsiodes }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            {epsiodes.map((saison, index) =>
                saison.episodes.map((episode, id) => {
                    return (
                        <Accordion expanded={expanded === id + '' + index + ''} onChange={handleChange(id + '' + index + '')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>{"saison " + (index + 1) * 1}</Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    {episode.name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {episode.overview || "not mentioned"}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )

                })
            )}

        </div>
    );
}